import { Card, List, Button } from "antd";

const { Meta } = Card;

function FoodBox({ food, onDelete }) {
  const handleDelete = (foodItem) => {
    onDelete(foodItem);
  };

  return (
    <div className="align">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={food}
        renderItem={(foodItem) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 300, padding: 5 }}
              cover={<img alt="example" src={foodItem.image} />}
            >
              <Meta
                title={foodItem.name}
                description={"Calories: " + foodItem.calories}
              />
              <p>{"Servings: " + foodItem.servings}</p>
              <Button onClick={() => handleDelete(foodItem)} type="danger">Delete</Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default FoodBox;
