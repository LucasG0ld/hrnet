import TitleH2 from "../atoms/titleH2/titleH2";
import Cross from "../atoms/cross/cross";
import Table from "../atoms/table/table";

const data = [
    {
        firstName: "John",
        lastName: "Doe",
        startDate: "2022-01-01",
        department: "Sales",
        dateOfBirth: "1990-05-15",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        startDate: "2022-02-15",
        department: "Marketing",
        dateOfBirth: "1988-09-20",
        street: "456 Elm St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94101",
      }
  ];

function ViewTemplate() {

    return (
        <section className="hnt-create-template">
            <Cross></Cross>
            <TitleH2 title="Current Employee"></TitleH2>
            <Table data={data}></Table>
        </section>
    )
}

export default ViewTemplate;