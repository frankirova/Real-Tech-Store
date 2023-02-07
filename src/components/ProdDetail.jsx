import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Count } from "../components";

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
  Flex,
} from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

export const ProdDetail = ({
  prodById,
  id,
  categoria,
  precio,
  nombre,
  almacenamiento,
  ram,
  procesador,
  pantalla,
  img,
  stock,
}) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const addTo = (quantity) => {
    addToCart({ id, img, categoria, precio, nombre, quantity });
  };
  return (
    <article className="vh-100">
      <Card size="lg" justifyContent="center">
        <CardBody>
          <Heading textAlign="center" my="1rem" size="md">
            {nombre}
          </Heading>
          <Flex direction="row" gap="3rem" minW="400px">
            <Stack>
              <figure className="d-flex justify-content-center">
                <Image
                  boxSize="240px"
                  src={img}
                  alt={nombre}
                  objectFit="cover"
                  borderRadius="lg"
                />
              </figure>
            </Stack>

            <Stack mt="6" spacing="6" justifyContent="center">
              <Text>
                <p>{procesador}</p>
                <p>{ram}</p>
                <p>{almacenamiento}</p>
                <p>{pantalla}</p>
              </Text>
              <Text color="green.600" fontSize="2xl">
                ${precio}
              </Text>
            </Stack>
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter className="d-flex align-items-center justify-content-center">
          <ButtonGroup spacing="2">
            <div className="count-component d-flex align-items-center justify-content-center">
              {isInCart(id) ? (
                <Link to="/cart" className="btn btn-success mx-2 my-auto">
                  Confirm Order
                </Link>
              ) : stock > 0 ? (
                <Count prod={prodById} addTo={addTo} />
              ) : (
                <h1>Sin Stock</h1>
              )}
              <ToastContainer />
            </div>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </article>
  );
};
