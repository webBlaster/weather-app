import React, { useState } from "react";
import styled from "styled-components";
import cities from "../data.json";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  .second {
    position: fixed;
    text-align:center;
    width: 78%;
    right:0;
    top:0
    margin: 0 auto !important;
  }
`;

const SideBar = styled.ul`
  display: block;
  width: 22%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 2px solid black;
  list-style-type: none;
  text-align: center;
  background: grey;
`;

const Item = styled.li`
  cursor: pointer;
  border-top: 2px solid black;

  padding: 15px 0;
  :hover {
    color: white;
    background: black;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 0.6rem 0.5rem;
  margin: 0.5rem auto;
  width: 480px;
  @media (max-width: 550px) {
    width: 230px;
  }
`;

const Home: React.FC = () => {
  const [cityArray, setCityArray] = useState(cities);
  //add input changes to state
  const handleInputChange = (event: any) => {
    setCityArray(
      cities.filter((item) =>
        item.city
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <Container>
        <SideBar>
          {cityArray.map((item) => {
            return (
              <>
                <Item
                  key={item.id}
                  onClick={() => {
                    console.log(item.city);
                  }}
                >
                  {item.city}
                </Item>
              </>
            );
          })}
        </SideBar>
        <div className="second">
          <Input
            type="text"
            name="search"
            placeholder="Search Cities"
            required
            onChange={handleInputChange}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
