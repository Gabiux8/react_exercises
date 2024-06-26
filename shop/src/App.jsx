import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Badge = styled.div`
  background-color: #d04848;
  padding: 10px;
  color: #fff;
  width: 70px;
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;

  img {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 20px #ddd;
  }

  filter: ${(props) => (props.$active ? "opacity(1)" : "opacity(0.5)")};
`;

const Price = styled.div`
  font-weight: bold;
  filter: ${(props) =>
    props.$active ? "color: #ff0000; font-size: 20px" : "color: #fff"};
`;

function App() {
  return (
    <>
      <Card $active={true}>
        <Badge>Hot</Badge>
        <div>
          <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
        </div>

        <div>
          <span>Women,bag</span>
          <h4>
            <a href="">Women leather bag</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div>
            <div>
              <Price $active={false}>
                <small>$96.00</small>$230.99
              </Price>
            </div>
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="xl"
                  style={{ color: "red" }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default App;
