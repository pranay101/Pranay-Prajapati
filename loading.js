
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div
          className={`h-screen w-screen absolute bg-[#141414] z-[1000] flex justify-center items-center duration-500 ease-out`}
        >
          <div className="loader">Loading The Experience</div>
        </div>
      );
  }