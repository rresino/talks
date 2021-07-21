---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

![bg vertical left:40% 80%](./img/rabbitmq.png) 
![bg left:40% 80%](./img/kafka.png)

# **RabbitMQ vs Kafka**

Let message broker fight begin


---

# What is Rabbit MQ

![bg vertical left:40% 80%](./img/rabbitmq.png) 

RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

---

# What is Rabbit MQ

![bg vertical left:40% 80%](./img/rabbitmq.01.png) 

- Producer + Topic + Consumer

![bg left:40% 80%](./img/rabbitmq.02.png) 

- Producer + Topic + Many Consumers

---

# What is Rabbit MQ

![bg left:40% 80%](./img/rabbitmq.03.png) 

Producer + Exchange + Many Topic + Many Consumers


---

# What is Rabbit MQ

![bg left:40% 80%](./img/rabbitmq.04.png) 

Producer + Exchange + Many Topic + Many Consumers

Exchange types:
    - direct: a match between `binding key = routing key`
    - topic: routing pattern
    - headers: header `x-match` 
    - fanout: broadcast to all topics.

---

# What is Rabbit MQ

![bg left:40% 80%](./img/rabbitmq.05.png) 

Producer + Exchange + Many Topic + Many Consumers

```markdown
channel.basic_publish(exchange='logs',
                      routing_key='',
                      body=message)
```
---

# What is Rabbit MQ

- **Dead letter** queue.
- **Clusters**.
- **Priority queues**.
- **Management plugin:** Admin ui.

---

# What is Apache Kafka



---