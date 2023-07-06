import React from "react";
import { render } from "@testing-library/react";
import { Activity } from "./Activity";

describe("Activity", () => {
  it("renders activity details correctly", () => {
    const props = {
      id: 1,
      name: "Activity 1",
      countryID: "Country 1",
      difficulty: "Easy",
      duration: 2,
      season: "Summer",
    };

    const { getByText } = render(<Activity {...props} />);

    const name = getByText("Actividad");
    expect(name).toBeInTheDocument();

    const countryID = getByText("Pais");
    expect(countryID).toBeInTheDocument();

    const difficulty = getByText("Dificultad");
    expect(difficulty).toBeInTheDocument();

    const duration = getByText("Duración");
    expect(duration).toBeInTheDocument();

    const season = getByText("Temporada");
    expect(season).toBeInTheDocument();
  });
});
