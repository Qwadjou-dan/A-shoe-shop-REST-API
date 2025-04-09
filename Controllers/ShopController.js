//imports
const ShopModel = require("../Model/ShopModel");

//Controllers

//create shop
const createShopController = async (req, res) => {
  try {
    const {
      shopName,
      location,
      menShoe,
      shoeName_men,
      shoePrice_men,
      womenShoe,
      shoeName_women,
      shoePrice_women,
      kidsShoe,
      shoeName_kids,
      shoePrice_kids,
      phone,
    } = req.body;

    const shop = ShopModel({
      shopName,
      location,
      menShoe,
      shoeName_men,
      shoePrice_men,
      womenShoe,
      shoeName_women,
      shoePrice_women,
      kidsShoe,
      shoeName_kids,
      shoePrice_kids,
      phone,
    });
    await shop
      .save()
      .then(() => {
        res.status(201).json(shop);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(404).json({ message: "error" });
  }
};

//retrieve shop
const retrieveShopsController = (req, res) => {
  //retrieve only one data using id
  let { id } = req.params;
  if (id) {
    ShopModel.findById(id)
      .then((shop) => {
        res.status(201).json(shop);
      })
      .catch((err) => console.log(err));
  } else {
    //retrieve all data
    ShopModel.find()
      .then((shop) => {
        res.status(201).json(shop);
      })
      .catch((err) => console.log(err));
  }
};

//update shop
const updateShopController = async (req, res) => {
  const { shopName, location, menShoe, womenShoe, kidsShoe, phone } = req.body;
  let { id } = req.params;

  await ShopModel.findById(id)
    .then((shop) => {
      if (shop) {
        (shop.shopName = shopName),
          (shop.location = location),
          (shop.phone = phone);
        if (menShoe) {
          shop.menShoe = {
            shoeName_men: menShoe.shoeName_men,
            shoePrice_men: menShoe.shoePrice_men,
          };
        }

        if (womenShoe) {
          shop.womenShoe = {
            shoeName_women: womenShoe.shoeName_women,
            shoePrice_women: womenShoe.shoePrice_women,
          };
        }

        if (kidsShoe) {
          shop.kidsShoe = {
            shoeName_kids: kidsShoe.shoeName_kids,
            shoePrice_kids: kidsShoe.shoePrice_kids,
          };
        }

        shop
          .save()
          .then((result) => {
            res.status(201).json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.status(404).json({ message: "error" });
      }
    })
    .catch((err) => console.log(err));
};

//delete shop
const deleteShopController = async (req, res) => {
  let { id } = req.params;
  await ShopModel.findByIdAndDelete(id).then((shop) => {
    if (shop) {
      shop.deleteOne();
      res.status(201).json({ message: "Shop deleted", data: shop });
    } else {
      res.status(404).json({ message: "Shop not found" });
    }
  });
};

//export controllers
module.exports = {
  createShopController,
  retrieveShopsController,
  updateShopController,
  deleteShopController,
};
