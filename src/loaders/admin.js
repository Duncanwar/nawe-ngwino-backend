import { user } from "../database/models/index";
import "dotenv/config";
import ERole from "../constants/ERole";
import Generic from "../helpers/Generic";

const { FIRST_NAME, LAST_NAME, NID, ADMIN_NUMBER, PASSWORD } = process.env;
export default async () => {
  const admin = {
    first_name: FIRST_NAME,
    last_Name: LAST_NAME,
    phone_number: ADMIN_NUMBER,
    password: PASSWORD,
    nid: NID,
  };
  const user = await Generic.findByPhoneNo(user, ADMIN_NUMBER);
  console.log(user);
  // const user await Generic.create(User, admin);
};
