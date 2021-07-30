---

theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
header: 'RabbitMQ vs Kafka'
footer: 'by Rubén Resino - MIT license'

---

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.png) 
![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.png)

# **RabbitMQ vs Kafka**

Let message broker fight begin


---

# What is Rabbit MQ

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.png) 

RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.


---

# What is Rabbit MQ

- Created by Rabbit Technologies Ltd. and adquire by Spring Source (Vmware), now Open Source Project maintained by Pivotal.
- Implements: Advanced Message Queuing Protocol (AMQP).
- Write in Erlang using Open Telecom Platform (OTP).
- Implements: Advanced Message Queuing Protocol (AMQP).

---

# What is Rabbit MQ

- The project consists of:
    - The RabbitMQ exchange server
    - Gateways for AMQP, HTTP, STOMP, and MQTT protocols
    - AMQP client libraries for Java, .NET Framework and Erlang. (AMQP clients for other languages are available from other vendors.)

---

# What is Rabbit MQ

- The project consists of:
    - A plug-in platform for extensibility, with a predefined collection of supported plug-ins, including:
        - "Shovel" plug-in that takes care of moving or copying (replicating) messages from one broker to another.
        - "Federation" plug-in that enables efficient sharing of messages between brokers (at the exchange level).
        - "Management" plug-in that enables monitoring and control of brokers and clusters of brokers.
---
# Rabbit MQ: How it works

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.01.png) 

- Producer + Topic + Consumer

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.02.png) 

- Producer + Topic + Many Consumers

---

# Rabbit MQ: How it works

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.03.png) 

Producer + Exchange + Many Topic + Many Consumers


---

# Rabbit MQ: How it works

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.04.png) 

Exchange types:
    - direct: a match between `binding key = routing key`
    - topic: routing pattern
    - headers: header `x-match` 
    - fanout: broadcast to all topics.

---

# Rabbit MQ: How it works

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.05.png) 

Producer + Exchange + Many Topic + Many Consumers

```markdown
channel.basic_publish(exchange='logs',
                      routing_key='',
                      body=message)
```

---

# Rabbit MQ: How it works

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.06.png) 

---

# Rabbit MQ: ... and one more thing

- **Dead letter** queue.
- **Clusters**.
- **Priority queues**.
- **Management plugin:** Admin ui.

---

# What is Apache Kafka

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.png) 

Apache Kafka is a framework implementation of a software bus using stream-processing

---

# What is Apache Kafka

- Created by Linkedln, now it's a Open Source Project maintained by Confluent.
- Write in Java and Scala.
- Distributed, resilent arquitecture. fault tolerant

---

# What is Apache Kafka

- Horizontal scalability:
    - Can scale to 100s of brokers
    - Can scale to 1Ms of messages per second.
- High performance (lastency of less than 10ms) - real time or near real time.
- Used by: Airbnb, Linkedln, Uber, Netflix, Walmart ...

---

# Apache Kafka: User cases

- Pub-sub or messaging system
- Event sourcing
- Activity tracking
- Gather metrics from many locations (IOT)
- Apps logs gathering
- ETL in Big data tools
- Streams: Kafka streams, Spark ...

---

# Apache Kafka: How it works

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.01.png) 

- Producer/s
- Zookeeper *
- Kafka
- Consumer/s

---

# Apache Kafka: How it works

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.02.png) 

- Zookeeper nodes
- Kafka nodes

---

# Apache Kafka: How it works

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.04.jpg) 

- Topics Offsets

---

# Apache Kafka: How it works

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.03.png) 

- Topic partitions 
- Consumer group

---

# Apache Kafka: How it works

![bg vertical left:50% 90%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.05.jpg) 

- Topics replication

---

# Apache Kafka: How it works

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.06.png) 

Serializers:
    - Json
    - Bytes
    - Avro
    - Protobuff
    - Custom

---

# Apache Kafka:  ... and one more thing

- **GUI Clients:** Kafdrop, Kafka Manager, Conduktor, Kafka UI ...
- **Kafka Stream**
- **Avro + Schema Registry**
- **Confluent Connector** Connectors to copy data between Kafka and other systems.
- **ksqlDB:** Kafka stream as a database.

---

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.png) 
![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.png)

# **RabbitMQ vs Kafka**

Examples

---

# Event Sourcing with RabbitMQ

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.03.png) 

* Exchange - Fanout
* X Topics one per Micro #
* Micro #1 - publish a msg

---

# Event Sourcing with RabbitMQ

![bg left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/rabbitmq.03.png) 

## Problems:

* Add binding on exchange per new micro.
* Duplicate topics.
* Loose mgs.
* No event history.

---

# Event Sourcing with Kafka

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/kafka.04.jpg)

* Topic
* Micro #1 - publish a msg 
* Micro #2 - Listen to topic

---

# When use RabbitMQ 

- Simple pub-sub.
- Priority queues.
- Ensure consumption only 1 time each message.
- No DevOps or lack of them.

---

# When use Kafka 

- Strong knowledge of Kafka or can use a Cloud Kafka provider.
- Events in real time.
- Big data, ETL, IOT events...
- Event streaming or Event sourcing.
- When you need to store and consume thousands of events in real time. 

---

# Performance

![bg vertical left:40% 80%](https://raw.githubusercontent.com/rresino/talks/main/rabbitmq_vs_kafka/public/img/performance.01.png)

https://www.confluent.io/blog/kafka-fastest-messaging-system/

