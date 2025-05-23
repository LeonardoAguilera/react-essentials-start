export default function CoreConcept({image, title, description}) {
  // Destructure props to get image, title, and description
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}