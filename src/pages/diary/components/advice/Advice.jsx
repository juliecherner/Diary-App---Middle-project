import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdvice } from "../../../../store/actions/currentAdvice.actions";
import { addTodo } from "../../../../store/actions/todos.actions";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./advice.scss";

const adviceConstants = [
  {
    color: "success",
    text: "Good advice",
    icon: <AddTaskIcon />,
  },
  {
    color: "error",
    text: "Bad advice",
    icon: <NotInterestedIcon />,
  },
];

const Advice = () => {
  const dispatch = useDispatch();

  const advice = useSelector((state) => state.currentAdviceState);

  const handleClick = (text) => {
    if (text === "Bad advice") {
      dispatch(getAdvice());
    } else {
      dispatch(addTodo(advice));
      dispatch(getAdvice());
    }
  };

  useEffect(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  return (
    <div>
      <div className="diary-advice">
        <div className="diary-advice-text">{advice.text}</div>
        <div className="diary-advice-buttons">
          <ButtonGroup>
            {adviceConstants.map((constant) => (
              <Button
                key={constant.text}
                onClick={() => handleClick(constant.text)}
                color={constant.color}
                variant="outlined"
                size="medium"
              >
                {constant.icon} {constant.text}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Advice;
