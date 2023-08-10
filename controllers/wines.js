import WineData from "../models/WineData.js";

// Gets all wines
export const getWines = async (req, res) => {
  try {
    let wines = await WineData.find();
    res.json(wines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets singular wine by ID
export const getWineById = async (req, res) => {
  try {
    const wine = await WineData.findById(id);
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets all white wines
export const getWineByWhite = async (req, res) => {
  try {
    const wine = await WineData.find({ ProductType: "White Wine" });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets all red wines
export const getWineByRed = async (req, res) => {
  try {
    const wine = await WineData.find({ ProductType: "Red Wine" });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets all rosé wines
export const getWineByRose = async (req, res) => {
  try {
    let wine = await WineData.find({ ProductType: "Rosé Wine" });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets all sparkling wines, note VARIETAL TYPE vs. PRODUCT TYPE
export const getWineBySparkling = async (req, res) => {
  try {
    const wine = await WineData.find({ VarietalType: "Sparkling" });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Gets all wines by country
export const getWineByCountryState = async (req, res) => {
  try {
    const { country } = req.params;
    const wine = await WineData.find({ CountryState: country });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// export const getWineBySuggested = async (req, res) => {
//   try {
//     const { Suggested } = req.params;
//     const wine = await WineData.find({ Suggested });
//     if (!wine) {
//       return res.status(404).json({ message: "Invalid ID" });
//     }
//     res.json(wine);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };
