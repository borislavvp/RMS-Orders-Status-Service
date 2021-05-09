export type Listener<Message> = (message: Message) => any;

export default class Messager<Topic extends string | number, Message> {
  topics: Record<Topic, Listener<Message>[]> = {} as Record<Topic, Listener<Message>[]>;

  private topicExists(topic: Topic) {
    return topic in this.topics;
  }

  public subscribe(topic: Topic, listener: Listener<Message>) {
    if (!this.topicExists(topic)) this.topics[topic] = [];
    const index = this.topics[topic].push(listener) - 1;
    let alreadyRemoved = false;
    return {
      remove: () => {
        if (!alreadyRemoved) {
          this.topics[topic] = this.topics[topic].filter((_, i) => index !== i);
          alreadyRemoved = true;
          return;
        }
        throw new Error("This listener has already been removed");
      }
    };
  }

  public publish(topic: Topic, message: Message) {
    if (!this.topicExists(topic) || !this.topics[topic].length) return;

    this.topics[topic].forEach(t => {
      t(message);
    });
  }
}