import SampleCategoryMedia from "../components/SampleCategoryMedia";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <SampleCategoryMedia category="TRENDING" />
      <SampleCategoryMedia category="NOW_PLAYING" />
      <SampleCategoryMedia category="POPULAR" />
      <SampleCategoryMedia category="TOP_RATED" />
      <SampleCategoryMedia category="UPCOMING" />
    </div>
  );
};

export default HomePage;
