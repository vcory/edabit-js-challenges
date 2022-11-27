function backToHome(directions){
  return (directions.match(/N/g) || []).length === (directions.match(/S/g) || []).length && directions.match((/E/g) || []).length === (directions.match(/W/g) || []).length
}
