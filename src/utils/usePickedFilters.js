export const usePickedTvFilters = (pickedFilters) => {
  const brand = pickedFilters.find((pf) => pf.title === "brands");
  const type = pickedFilters.find((pf) => pf.title === "types");
  const size = pickedFilters.find((pf) => pf.title === "sizes");

  return { brand, type, size };
};

export const usePickedComputerFilters = (pickedFilters) => {
  const brand = pickedFilters.find((pf) => pf.title === "brands");
  const type = pickedFilters.find((pf) => pf.title === "types");
  const storageType = pickedFilters.find((pf) => pf.title === "storage types");
  const storageSize = pickedFilters.find((pf) => pf.title === "storage sizes");
  const ram = pickedFilters.find((pf) => pf.title === "rams");

  return { brand, type, storageType, storageSize, ram };
};

export const usePickedCellphoneFilters = (pickedFilters) => {
  const brand = pickedFilters.find((pf) => pf.title === "brands");
  const internalStorage = pickedFilters.find(
    (pf) => pf.title === "internal storage"
  );
  const ram = pickedFilters.find((pf) => pf.title === "rams");

  return { brand, internalStorage, ram };
};

export const usePickedAccessoryFilters = (pickedFilters) => {
  const brand = pickedFilters.find((pf) => pf.title === "brands");
  const category = pickedFilters.find((pf) => pf.title === "categories");

  return { brand, category };
};
