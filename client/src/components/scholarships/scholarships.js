
export default function Scholarships() {
    return (
        <div>
          <h2>Scholarships</h2>
          <div>
            <label for="button">Want to make a scholarship submission?</label>
            <button type="button">Click here</button>
          </div>
          <div>
            <form>
              <input type="search" placeholder="look thru database..."/>
              <select id="deadlines">
                <option value="all">All deadlines</option>
                <option value="1m"> less than 1 months</option>
                <option value="3m"> less than 3 months</option>
                <option value="6m"> less than 6 months</option>
              </select>
              <select id="awards">
                <option value="all">All awards</option>
                <option value="1"> less than $1,000</option>
                <option value="5"> less than $5,000</option>
                <option value="10"> less than $10,000</option>
              </select>
              <button type="Submit">Search</button>
            </form>
          </div>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Deadline</th>
                  <th>Award</th>
                  <th>Overview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>scholarship title</td>
                  <td>October 23rd</td>
                  <td>$400</td>
                  <td>test</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
}

