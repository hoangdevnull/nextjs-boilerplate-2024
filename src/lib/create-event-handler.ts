type EventHandler<Event> = ((event?: Event) => void) | undefined;

/**
 * Creates an event handler that invokes both a parent event handler and a child event handler.
 *
 * @param {EventHandler<Event>} parentEventHandler - The parent event handler.
 * @param {EventHandler<Event>} eventHandler - The child event handler.
 * @return {(event?: Event) => void} - The event handler function.
 */
export function createEventHandler<Event>(parentEventHandler: EventHandler<Event>, eventHandler: EventHandler<Event>) {
  return (event?: Event) => {
    parentEventHandler?.(event);
    eventHandler?.(event);
  };
}
