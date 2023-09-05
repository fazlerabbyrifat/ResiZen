import { PhoneIcon } from "@heroicons/react/24/outline";

const PropertyDetails = ({ details, price, contact }) => {
  return (
    <div id="propertyDetails" className="md:grid md:grid-cols-4 gap-3 my-10">
      <div className="md:col-span-3 space-y-3">
        <h3 className="text-3xl font-semibold">Property Details</h3>
        <p className="text-lg font-medium">{details}</p>
        <p className="text-lg font-medium">We provided best qualities to our students. We have a great support team who can provided best facilities to our students. Our support team is very professional who provided personal support to our students.</p>
      </div>
      <div className="md:col-span-1 border-2 rounded-lg shadow-md p-5 space-y-5">
            <h3 className="text-3xl font-semibold ">${price}</h3>
            <p className="text-lg font-medium">Moved in date: 10-09-2023</p>
            <button className="bg-[#ddeaf6] text-[#235784] px-4 py-2 my-5 w-full rounded-lg">Book Now</button>
            <div className="flex items-center gap-2 border-b-2 border-black pb-3 text-base font-medium">
                <span className="text-[#235784]">
                    <PhoneIcon width={16} height={16} />
                </span>
                <p>{contact}</p>
            </div>
            <p className="text-base font-medium">10 am - 8 pm (Sunday - Friday)</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
