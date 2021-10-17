import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { clearError } from "../../redux/actions/userAction";
import { CardItem } from "./CardItem";

export const CardFeatured = () => {
  const dispatch = useDispatch();
  const {
    rooms: data,
    // resPerPage,
    // roomsCount,
    // filteredRoomsCount,
    error,
  } = useSelector((state) => state.allRooms);

  useEffect(() => {
    if (error) {
      toast.error(`🦄 ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch(clearError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // /* Change this according to your needs */
  // const cards = [
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
  //     title: "Wyatt Residency",
  //     description:

  //     locationText: "Rome, Italy",
  //     pricingText: "USD 39/Day",
  //     rating: "4.8",
  //   },
  //   {
  //     imageSrc:

  //     title: "Soho Paradise",
  //     description:

  //     locationText: "Ibiza, Spain",
  //     pricingText: "USD 50/Day",
  //     rating: 4.9,
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
  //     title: "Hotel Baja",
  //     description:

  //     locationText: "Palo Alto, CA",
  //     pricingText: "USD 19/Day",
  //     rating: "5.0",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
  //     title: "Hudak Homes",

  //     locationText: "Arizona, RAK",
  //     pricingText: "USD 99/Day",
  //     rating: 4.5,
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
  //     title: "Hotel Baja",

  //     locationText: "Palo Alto, CA",
  //     pricingText: "USD 19/Day",
  //     rating: "5.0",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
  //     title: "Hudak Homes",

  //     locationText: "Arizona, RAK",
  //     pricingText: "USD 99/Day",
  //     rating: 4.5,
  //   },
  // ];

  return (
    <section className="pt-6 pb-10 mt-20">
      <h2 className="p-3 pb-5 text-3xl font-semibold text-indigo-800">
        Popular Hotels.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 md:pl-10 w-full">
        {data?.slice(3, 6).map((item) => {
          const { _id: id } = item;

          // TODO=> change this later
          //! HARD CODED
          const rating = `${Math.random() * 5}`;

          const newRating = Number(rating).toFixed(1);

          return (
            <CardItem
              key={id}
              title={item.name}
              rating={newRating}
              description={item.description}
              location={item.address}
              price={item.pricePerNight}
              image={item.images[0].url}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};

// const [sliderRef, setSliderRef] = useState(null);
// const sliderSettings = {
//   arrows: false,
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: {
//         slidesToShow: 2,
//       },
//     },

//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };
