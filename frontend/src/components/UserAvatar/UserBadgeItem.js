import { Badge } from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Badge
      variant="outline"
      colorScheme="white"
      color="white"
      bg="whatsapp.600"
      cursor="pointer"
      onClick={handleFunction}
      padding={1}
      margin={1}
      borderRadius="lg"
    >
      {user.name}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
