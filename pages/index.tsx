import Head from 'next/head';
import Link from 'next/link';
import {convertMeal, DbMeal, Meal} from "../models/meal";
import axios, {AxiosResponse} from "axios";
import moment from "moment";



let dayRetrieved: string = "";
let meals: Array<Meal>;
import {Container, Row, Col} from "shards-react";


import {
    Card,
    CardHeader,
    CardImg,
} from "shards-react";


export default function Home({data}: { data: Array<Meal> }) {
    return (
        <Container>

            <Head>
                <title>Recipe Finder</title>
            </Head>
            <Row>
                <Col>
                    <div className="home-hero">
                        <img src="logo.png" alt={"Recipe Finder Logo"}/>
                        <Link href="/">
                            <a className={"floating-button"}>
                                <i className="fas fa-search"></i>
                            </a>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={"page-title"}>Recipes of the Day <i className="fas fa-search"></i></div>
                </Col>


                {data.map(meal => (
                    <Col sm={12} lg={4} key={meal.id} className={"meal"}>
                        <Link href={"/detail/" + meal.id}>
                        <Card>

                            <CardHeader>{meal.title}</CardHeader>
                            <CardImg src={meal.thumb} alt={"Image of " + meal.title}/>

                        </Card>
                        </Link>
                    </Col>
                ))}
            </Row>


        </Container>
    )
}


// This gets called on every request
export async function getServerSideProps(): Promise<{ props: { data: Array<Meal> } }> {
    let today = moment().format('DDD');
    if (dayRetrieved !== today) {
        meals = await getRandomFromRemote(5);
        dayRetrieved = today;
    }

    return {props: {data: meals}};
}


interface MealRequestData {
    meals: Array<DbMeal>
}

//If we had a paid API key this would be as simple as calling a different endpoint
async function getRandomFromRemote(count: number): Promise<Array<Meal>> {
    let reqs: Array<Promise<AxiosResponse<MealRequestData>>> = [];

    const getRand = async () => axios.request<MealRequestData>({url: 'https://www.themealdb.com/api/json/v1/1/random.php'})

    for (let i = 0; i < count; i++) {
        reqs.push(getRand());
    }

    const responses = await Promise.all(reqs);
    const mealQueue = responses.map(res => res.data.meals[0]);
    const meals = [mealQueue.pop()];

    while (meals.length < count) {
        let meal = mealQueue.pop();
        if (meals.find(m => m.idMeal === meal.idMeal)) {
            let nMeal = await getRand();
            mealQueue.push(nMeal.data.meals[0]);
        } else {
            meals.push(meal);
        }
    }

    return responses.map(res => convertMeal(res.data.meals[0]));
}
