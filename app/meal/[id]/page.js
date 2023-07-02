import { fetchMeal, getIngredients } from "@/utils";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  let data;
  let ingredients;

  try {
    data = await fetchMeal(id);
    ingredients = getIngredients(data);
  } catch (e) {
    return (
      <div className="alert alert-danger" role="alert">
        {e.toString()}
      </div>
    );
  }

  return (
    <div className="my-4 text-center">
      <h1>{data.meals[0].strMeal}</h1>
      <Image
        src={data.meals[0].strMealThumb}
        width={350}
        height={300}
        layout="responsive"
        className="my-3"
      />
      <div className="alert alert-dark" role="alert">
        {data.meals[0].strCategory}
        <br />

        {data.meals[0].strArea}
      </div>
      <p>{data.meals[0].strInstructions}</p>
      {data.meals[0].strYoutube && (
        <a href={data.meals[0].strYoutube} target="_blank">
          <Image src="/watch-on-youtube.png" width={180} height={80} />
        </a>
      )}
      <div className="my-2">
        <h2>ingredients</h2>
        {ingredients.map((ingredient) => (
          <span className="badge text-bg-dark m-1 p-2">{ingredient}</span>
        ))}
      </div>
    </div>
  );
};

export default Page;
