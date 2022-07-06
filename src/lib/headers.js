import token from "./token";

const header = async() => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${await token()}`,
    'Accept': "application/json"
  }
  return headers
}

export default header