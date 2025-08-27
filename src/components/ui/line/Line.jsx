function Line({ width, height, color = "bg-sagerGray-50", rotation }) {
  return (
    <div
      className={`w-${width} h-${height} ${color} mx-auto mt-0 mb-0 rotate-${rotation}`}
    ></div>
  );
}

export default Line;
