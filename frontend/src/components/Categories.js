import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Stack,
  Divider,
  Typography,
  Drawer,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  Box,
  Tab,
  Tabs,
  PropTypes,
  TextField,
  Autocomplete,
  Modal,
} from "@mui/material";

const Categories = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [state, setState] = React.useState({ right: false });
  const [assetName, setAssetName] = useState("");
  const [assetId, setAssetId] = useState("");
  const [age, setAge] = React.useState("");

  const [categories, setCategories] = useState([]);//from category API
  const [serviceUser,setServiceUsers]=useState([])//from service User API


  //for modal
  const [name, setCategoryName] = useState("");

  const userInfo = localStorage.getItem("userLogin")
    ? JSON.parse(localStorage.getItem("userLogin"))
    : null;
  let token = userInfo.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    try {
      if (userInfo) {
        console.log(userInfo);
      }

      const data = async () => {
        const { data } = await axios.get(
          "http://localhost:3001/categories",
          config
        );
        console.log(data);

        setCategories(
          data.map((e) => {
            return e;
          })
        );
      };

      const users=async()=>{
          const {data}=await axios.get('http://localhost:3001/serviceUsers',config)
          setServiceUsers(data.map((user)=> user))
      }
      users()
      data();
    } catch (err) {}
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCategory = async (e) => {
    console.log(name);
    if (name != " ") {
      try {
        const { data } = await axios.post(
          "http://localhost:3001/addCategory",
          { name: name },
          config
        );
        console.log(data);
      } catch (error) {}
    }
  };

  const toggleDrawer = (anchor, open, assetName, assetID) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAssetId(assetID);
    setAssetName(assetName);
    setState({ state, [anchor]: open });
    


  };

  //for Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container spacing={2}>
        {categories &&
          categories.map((category) => {
            return (
              <Grid item sx={{}}>
                <Card
                  sx={{ width: 150, height: 150 }}
                  onClick={toggleDrawer(
                    "right",
                    true,
                    category.assetName,
                    category.assetId
                  )}
                >
                  <Box sx={{ borderTop: "14px solid black" }} />
                  <Grid
                    container
                    sx={{ height: 100 }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography alignItems="center">
                      {category.assetName}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            );
          })}

        <Grid item sx={{}}>
          <Card
            sx={{ width: 150, height: 150, border: "2px dashed black" }}
            type="button"
            onClick={handleOpen}
          >
            <Box />
            <Grid
              container
              sx={{ height: 100 }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography>Add new Categories</Typography>
            </Grid>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="p" component="p">
                  Add New Category
                </Typography>
                <Grid items p={2} lg={12}>
                  <TextField
                    label="Category Name"
                    variant="standard"
                    name="category"
                    onChange={(e) => setCategoryName(e.target.value)}
                    value={name}
                    fullWidth
                  />
                </Grid>
                <Button onClick={handleCategory}>Save </Button>
                <Button onClick={handleClose}>Cancel</Button>
              </Box>
            </Modal>
          </Card>
        </Grid>
      </Grid>

      <React.Fragment key={"right"}>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box
            sx={{
              width: "right" === "top" || "right" === "bottom" ? "auto" : 450,
            }}
            // onClick={toggleDrawer('right', false)}
          >
            <Grid container lg={12} alignItems="center">
              <Grid items p={2} lg={12} p={2}>
                <TextField
                  label="Category name"
                  variant="standard"
                  value={assetName}
                  fullWidth
                />
              </Grid>
              <Grid items p={2} lg={12}>
                <TextField
                  label="Asset ID"
                  variant="standard"
                  value={assetId}
                  fullWidth
                />
              </Grid>
              <Grid items p={2} lg={12}>
                <TextField
                  type="date"
                  variant="outlined"
                  // label='Date'
                  fullWidth
                />
              </Grid>
              <Grid items lg={12} p={2}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Asset Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Asset Status"
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="submitted">Disposed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid items p={2} lg={12}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={serviceUser}
                  getOptionLabel={(option) => option.userName}
                  
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Asset Assigned To"
                      placeholder="Add More"
                    />
                  )}
                />
              </Grid>
              <Grid item  p={2} lg={6}>
                    <Button contained>Save</Button>
              </Grid>
              <Grid item p={2} lg={6}>
                    <Button>Discard</Button>
              </Grid>
            </Grid>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Categories;
