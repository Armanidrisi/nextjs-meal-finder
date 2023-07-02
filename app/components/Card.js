import Image from "next/image";
import Link from "next/link";

const Card = ({ meal }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <Image
            src={meal.strMealThumb}
            className="card-img-top"
            alt={meal.strMeal}
            width={300}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>

            <Link href={`/meal/${meal.idMeal}`} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
