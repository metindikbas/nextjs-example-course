import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import styles from './event-item.module.css';

function EventItem(props) {
  console.log('hello');
  const { data } = props;

  const humanReadableDate = new Date(data.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = data.location.replace(',', '\n');
  const exploreLink = `/events/${data.id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + data.image} alt={data.title}></img>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{data.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
