import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ConfirmationModal = ({ isOpen, onClose, reedem, token }) => {
  const handleClick = () => {
    console.log(token.id);
    onClose();
    reedem(token.id);
  };

  return (
    <Box width={"200px"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`Reedem ${token.label}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text color={"red.400"} fontSize={19}>
              Are you sure !!!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleClick();

                // setConfirm(true);
              }}
              colorScheme="green"
              mr={3}
            >
              Confirm
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConfirmationModal;
