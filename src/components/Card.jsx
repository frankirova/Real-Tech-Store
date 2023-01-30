import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { authContext } from "../Context/LoginContext";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export const CardProd = ({ prod }) => {
  const { id, img, categoria, precio, nombre } = prod;

  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(authContext);

  const quantity = 1;
  const addTo = (quantity) => {
    addToCart({ id, img, categoria, precio, nombre, quantity });
  };
  return (
    <div>
      <Card maxW="sm">
        <CardBody align="start">
          <figure className="d-flex justify-content-center">
            <Image
              boxSize="240px"
              src={prod.img}
              alt={prod.nombre}
              objectFit="cover"
              borderRadius="lg"
            />
          </figure>
          <Stack mt="6" spacing="3">
            <Heading size="md">{prod.nombre}</Heading>
            <Text>
              <p>{prod.procesador}</p>
              <p>{prod.ram}</p>
              <p>{prod.almacenamiento}</p>
              <p>{prod.pantalla}</p>
            </Text>
            <Text color="green.600" fontSize="2xl">
              ${prod.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            {!isLoggedIn ? (
              <Link className="btn btn-success" to="/Login">
                See more
              </Link>
            ) : (
              <Link className="btn btn-success" to={`/prod/${prod.id}`}>
                See more
              </Link>
            )}
            {!isLoggedIn ? (
              <Link to="/Login">
                <Button variant="ghost" colorScheme="green">
                  Add to cart
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => addTo(quantity)}
                variant="ghost"
                colorScheme="green"
              >
                Add to cart
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};
