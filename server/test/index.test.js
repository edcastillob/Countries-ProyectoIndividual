const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("Test Rutas Countries", () => {
  describe("GET /countries", () => {
    it("Debería responder con status: 200", async () => {
      await agent.get("/countries").expect(200);
    });

    it("Debería responder con status: 200", async () => {
      await agent.get("/countries/:id").expect(200);
    });
  });
});

describe("Test Rutas Activities", () => {
  describe("GET /activities", () => {
    it("Debería responder con status: (200) - Ruta todas las actividades", async () => {
      await agent.get("/countries").expect(200);
    });

    it("Debería responder con status: (200) ", async () => {
      await agent.get("/activitiescountry").expect(200);
    });
  });

  describe("Post /activities", () => {
    it("Debería agregar correctamente la actividad de prueba a la DB", async () => {
      let response = await agent
        .post("/activities")
        .send({
          name: "Actividad de prueba de ruta post",
          difficulty: "1",
          duration: "1",
          season: "Invierno",
          countries: ["AUS"],
        })
        .expect(200);       

    });

    it("Debería responder con status: (200) - Ruta todas las actividades mas country", async () => {
      let response = await agent.get("/activitiescountry/1").expect(200);
    });
  });

  describe("Delete /activities", () => {
    it("Debería eliminar correctamente la actividad de prueba a la DB", async () => {
      let response = await agent.delete("/activities/1").expect(200);
    });
  });
});

const { DataTypes } = require("sequelize");
const defineCountryModel = require("../src/models/Country");
const defineActivityModel = require("../src/models/Country");

describe("Test Modelo Country", () => {
  let Country;

  beforeAll(() => {
    Country = defineCountryModel({ define: jest.fn(), DataTypes });
  });

  it("Debería Definir correctamente el modelo de Country", () => {
    expect(Country).toBeDefined();
  });
});

describe("Test Modelo Activity", () => {
  let Activity;

  beforeAll(() => {
    Activity = defineActivityModel({ define: jest.fn(), DataTypes });
  });

  it("Debería Definir correctamente el modelo de Activity", () => {
    expect(Activity).toBeDefined();
  });
});
