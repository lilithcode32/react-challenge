import axios from 'axios';
import {Meal, convertMeal, DbMeal} from "../../models/meal";
import React from "react";

function Page({ data }:{data: Meal}) : React.ReactElement{

    const {ingredients, thumb, title, instructions} = data;

    return <div>
        <nav>
            <div>back</div>
        </nav>
        <img src={thumb} alt={"Image of" + title} />
        <h1>{title}</h1>
        <ul>
            {ingredients.map(({ingredient, measure}, idx) => (
                <li key={idx}>
                    <span>{measure}</span>
                    &nbsp;
                    <span>{ingredient}</span>
                </li>
            ))}
        </ul>
        <pre>{instructions}</pre>
    </div>
}


// This gets called on every request
export async function getServerSideProps({ params }: {params: {recipe_id:string } }) : Promise<{props:{data:Meal}}>{
    params.recipe_id = params.recipe_id || '52892';

    const res = await axios.request<{meals: Array<DbMeal>}>({url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipe_id}`});

    return { props: {data: convertMeal(res.data.meals[0])}}
}

export default Page
