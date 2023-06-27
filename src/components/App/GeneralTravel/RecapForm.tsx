import { RecapFormProps } from "../../../store/reducers/dataForm"; 
import dayjs from 'dayjs';
import 'dayjs/locale/fr';


function RecapForm(props: RecapFormProps) {
      // Fonction pour formater la date en français
  function formatTravelDate(date: string) {
    dayjs.locale('fr');
    const parsedDate = dayjs(date, 'YYYY-MM-DD');
    const formattedDate = parsedDate.format('DD MMMM YYYY');
    return formattedDate;
  }
    return (
        <div className="flex md:flex-row w-full sm:flex-col font-semibold">
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">{props.title}</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">{formatTravelDate(props.departureDate)}</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">{formatTravelDate(props.arrivalDate)}</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="/https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">{props.budget}</div>
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">
        {props.budget}
      </div>
    </div>
  );
}

export default RecapForm;
