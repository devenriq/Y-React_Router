import { useParams } from "react-router-dom";

export const Tacos = () => {
  const { taco } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      <p>{taco}</p>
    </div>
  );
};
