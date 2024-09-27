import styles from "./ResaturantCard.module.css";
// import styles from "./ResaturantCard.module.css";

const RestaurantCard = () => {
    return (
        <div className={styles["card-container"]}>
             <div>
             <h3 className={styles.title}>
                CN Chinees
             </h3>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
             </span>
             </div>
            
             <i class="fa-solid fa-location-dot"></i>
             <span className={styles.address}>228 City Road, Cardiff</span>
             <div>cp24 32H</div>
            <div className={styles["cusion-container"]}>
                 <div>
                   <i class="fa-solid fa-utensils"></i>
                   <span className={styles.cusions}>Chinesse</span>
                 </div>
                 <a href="http://">Visit menue</a>
               </div>
        </div>
    )
};

export default RestaurantCard;