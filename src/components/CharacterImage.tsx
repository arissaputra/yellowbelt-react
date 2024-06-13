interface CharacterImage {
  imageURL?: string;
}

const CharacterImage = ({ imageURL }: CharacterImage) => {
  const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  return (
    <img src={imageURL || defaultImageURL} alt={imageURL} className="max-h-80"/>
  )
}

export default CharacterImage