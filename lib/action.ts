export  function walletAddressShortn(
    address: string,
    start?: number,
    end?: number,
  ) {
    const startLength = start || 6;
    const endLength = end || 4;
    const shortAddress =
      address.slice(0, startLength) + "..." + address.slice(endLength * -1);
    return shortAddress;
  } 