import { AdviceList } from "./components/adviceList/AdviceList";
import { NewAdvice } from "./components/newAdvice/NewAdvice";

const MyAdvice = () => {
  return (
    <div>
      <div>My advice</div>
      <AdviceList />
      <NewAdvice />
    </div>
  );
};

export default MyAdvice;
