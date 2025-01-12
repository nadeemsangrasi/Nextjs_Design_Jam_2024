import Image from "next/image";
import img1 from "@/assets/images/shop/Cloud sofa three seater + ottoman_2 1.png";
import img2 from "@/assets/images/shop/Cloud sofa three seater + ottoman_1 1.png";

export default function ProductDetails() {
  return (
    <div className="p-4 md:p-8 border-t my-16">
      <div className="flex sm:flex-row flex-col space-x-4 text-gray-700 mb-8  border-gray-200 justify-center items-center ">
        <button className="px-4 py-2 border-b-2 border-black">
          Description
        </button>
        <button className="px-4 py-2">Additional Information</button>
        <button className="px-4 py-2">Reviews [5]</button>
      </div>

      <div className="text-gray-600 space-y-4 w-3/4 mx-auto">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage-styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-64 md:h-80 bg-custom-light-orange-1">
          <Image
            src={img1}
            alt="Sofa Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-64 md:h-80 bg-custom-light-orange-1">
          <Image
            src={img2}
            alt="Sofa Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
