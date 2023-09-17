import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { User } from "../../../../models/User"
import { useUser } from "../useUser";

interface IUserRowTableProps {
  user: User;
  selectUser: (id: number) => void;
  selectChangeUser: (id: number) => void;
  deleteUser: (id: number) => void;
}

const UserRowTable = ({ user, selectUser, selectChangeUser, deleteUser }: IUserRowTableProps) => {
  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.firstName + ' ' + user.lastName}</TableCell>
      <TableCell>
        <Button variant="text" onClick={() => selectUser(user.id as number)} >Edit</Button>
        <Button variant="text" onClick={() => deleteUser(user.id as number)} >Delete</Button>
        <Button variant="text" onClick={() => selectChangeUser(user.id as number)} >Change password</Button>
      </TableCell>
    </TableRow>
  )
}

export const UserTable = () => {

  const { 
    users, 
    editUser,
    changePasswordUser,
    deleteUserDialog
  } = useUser();
  
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Fullname</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map( user => <UserRowTable 
              user={user} 
              selectUser={editUser} 
              selectChangeUser={changePasswordUser} 
              deleteUser={deleteUserDialog} /> )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}