import { useLocation, useNavigate } from "react-router-dom";

export const Modal = ({ removeRecipe }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-column justify-center align-center mw6 shadow-1 br2 center h--100 ">
      <div className="center">
        <h1>Are you Sure want to delete?</h1>
      </div>
      <div className="flex justify-center">
        <div>
          <a
            onClick={(e) => {
              removeRecipe(location.state.id);
              navigate("/");
            }}
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy"
          >
            Confirm
          </a>
        </div>
        <div>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy ml2"
          >
            Return
          </a>
        </div>
      </div>
    </div>
  );
};
