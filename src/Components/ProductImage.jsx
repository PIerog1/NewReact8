function ProductImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "300px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
      }}
    />
  );
}

export default ProductImage;