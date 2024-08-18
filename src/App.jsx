import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";
import { useInView } from "react-intersection-observer";
function App() {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "60px 0px 0px 0px",
  });
  return (
    <>
      <div className=" w-full">
        <div ref={ref} className=" absolute h-[0.5px] w-full" />
        <Header inView={inView} />
        <Outlet />
        <Footer />
        {!inView ? (
          <div
            className=" h-[45px] w-[45px] fixed bottom-[30px] right-[30px]  bg-[#81c408] flex justify-center items-center rounded-full  "
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <i class="fa fa-arrow-up"></i>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
