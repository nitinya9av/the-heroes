
function Comics() {
  return (
    <div className="comics">
      {data.map((dataItem) => {
        const detailsUrl = dataItem.urls.find(
          (element) => element["type"] === "detail"
        ).url;

        return (
          <a
            key={dataItem.id}
            className="comicCard"
          >
            <div className="caption">{dataItem.title}</div>
            <div className="caption bottom">View Comic Details</div>
          </a>
        );
      })}
    </div>
  );
}

export default Comics;