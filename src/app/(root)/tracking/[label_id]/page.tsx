import TrackingCard from "@/components/shared/TrackingCard";
import axios from "axios";

const trackOrder = async (label_id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/shipengine/labels/${label_id}/track`,
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY! || "",
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching tracking data:", error);
    return null;
  }
};

const TrackingPage = async ({
  params,
}: {
  params: Promise<{ label_id: string }>;
}) => {
  const { label_id } = await params;
  const trackingData = await trackOrder(label_id);

  if (!trackingData) {
    return <div className="px-8 my-8 text-red-500">Unable to fetch data</div>;
  }

  return (
    <div className="px-8 py-8">
      <h1 className="text-5xl text-center pt-16 pb-8  font-semibold">
        Tracking your product
      </h1>

      <TrackingCard data={trackingData} />
    </div>
  );
};

export default TrackingPage;
