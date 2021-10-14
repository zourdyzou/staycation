import React, { useEffect } from "react";
import Link from "next/link";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import easyinvoice from "easyinvoice";

import { clearErrors } from "../../redux/actions/bookingAction";

export const MyBooking = () => {
  const dispatch = useDispatch();
  const { bookings, error } = useSelector((state) => state.myBooking);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const downloadInvoice = async (booking) => {
    const data = {
      documentTitle: "Booking INVOICE", // Defaults to INVOICE
      currency: "GBP",
      taxNotation: "vat", // or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "https://res.cloudinary.com/zenlock/image/upload/v1634235144/booz_xt97jj.png",
      sender: {
        company: "Staycation",
        address: "13th Street. 47 W 13th St",
        zip: "10001",
        city: "Krakow",
        country: "Poland",
      },
      client: {
        company: `${booking.user.name}`,
        address: `${booking.user.email}`,
        zip: "",
        city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
          "en-US"
        )}`,
        country: `Check In: ${new Date(booking.checkOutDate).toLocaleString(
          "en-US"
        )}`,
      },
      invoiceNumber: `${booking._id}`,
      invoiceDate: `${new Date(Date.now()).toLocaleString("fr-FR")}`,
      products: [
        {
          quantity: `${booking.daysOfStay}`,
          description: `${booking.room.name}`,
          tax: 0,
          price: booking.room.pricePerNight,
        },
      ],
      bottomNotice:
        "This is auto generated Invoice of your booking on Book IT.",
    };

    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf);
  };

  return (
    <div className="pt-28 px-4">
      <h1 className="text-2xl text-indigo-600 font-semibold py-4 pb-8">
        My Bookings
      </h1>

      {/* TABLE */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Booking ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Check Out
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Check In
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings?.map((booking) => {
                    const { _id: id } = booking;

                    return (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {id}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(booking.checkOutDate).toLocaleString(
                            "en-US"
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(booking.checkInDate).toLocaleString(
                              "en-US"
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${booking.amountPaid}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/booking/${id}`} passHref>
                            <a className="text-indigo-600 hover:text-indigo-900">
                              View
                            </a>
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => downloadInvoice(booking)}
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
