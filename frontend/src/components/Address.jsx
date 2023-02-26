import React, { useState } from "react";
import "./Address.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const AddressUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialState = {
    pincode: "",
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    mobile: "",
  };
  const [address, setAddress] = useState(initialState);
  const data = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    if (
      address.pincode &&
      address.firstName &&
      address.lastName &&
      address.address &&
      address.landmark &&
      address.city &&
      address.state &&
      address.mobile
    ) {
      fetch("http://localhost:4500/address/create", {
        method: "POST",
        body: JSON.stringify(address),
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          onClose();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Fill all the required fields");
    }
  };

  // console.log(address)

  return (
    <>
      <div className="address-div1">
        <div>
          <p>DELIVERY METHOD </p>
        </div>

        <Button onClick={onOpen} className="address-btn">ADD NEW SHIPPING ADDRESS</Button>
      </div>
      <div className="address-div2">
        <p>ORDER DETAILS</p>{" "}
      </div>
      <div className="address-div2">
        <p> PAY SECURELY</p>
      </div>

      <Modal
        //   initialFocusRef={initialRef}
        //   finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="blue.200">Add a new address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Pincode</FormLabel>
              <Input
                placeholder="Pincode"
                name="pincode"
                value={address.pincode}
                onChange={(e) => {
                  data(e);
                }}
              />
            </FormControl>
            <Flex direction="row">
              <FormControl mt={0}>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="First name"
                  name="firstName"
                  value={address.firstName}
                  onChange={(e) => data(e)}
                />
              </FormControl>
              <FormControl mt={0}>
                <FormLabel>Last name</FormLabel>
                <Input
                  placeholder="Last name"
                  name="lastName"
                  value={address.lastName}
                  onChange={(e) => data(e)}
                />
              </FormControl>
            </Flex>

            <FormControl mt={0}>
              <FormLabel>address</FormLabel>
              <Input
                placeholder="Address"
                name="address"
                value={address.address}
                onChange={(e) => data(e)}
              />
            </FormControl>
            <FormControl mt={0}>
              <FormLabel>Landmark</FormLabel>
              <Input
                placeholder="Landmark"
                name="landmark"
                value={address.landmark}
                onChange={(e) => data(e)}
              />
            </FormControl>
            <Flex direction="row">
              <FormControl mt={0}>
                <FormLabel>City</FormLabel>
                <Input
                  placeholder="City"
                  name="city"
                  value={address.city}
                  onChange={(e) => data(e)}
                />
              </FormControl>
              <FormControl mt={0}>
                <FormLabel>State</FormLabel>
                <Input
                  placeholder="State"
                  name="state"
                  value={address.state}
                  onChange={(e) => data(e)}
                />
              </FormControl>
            </Flex>
            <FormControl mt={0}>
              <FormLabel>Mobile</FormLabel>
              <Input
                placeholder="Mobile"
                name="mobile"
                value={address.mobile}
                onChange={(e) => data(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Link to="/payment">
            <Button onClick={handleSubmit} mr={3}>
              Submit
            </Button>
            </Link>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressUser;
