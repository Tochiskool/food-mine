import React from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnail.module.css";
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";

const Thumbnails = ({ foods }) => {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤️
              </span>
              <div className={classes.stars}>
                <StarRating stars={food.stars} size={18} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>
                  <span>🕒</span> {food.cookTime}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} locale='en-US' currency='USD' />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Thumbnails;

{
  /* <div className={classes.price}>
<Price price={food.price} />
</div> */
}
