import React from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';

interface HttpRequestProps {
  id: string;
}

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export const HttpRequest: React.FC<HttpRequestProps> = ({ id }) => {
  return (
    <>
      <ScreenWrapper id={id} color="bg-yellow-200">
        <div className="rounded w-full h-16 bg-blue-500">
          <label htmlFor="Request">Request</label>
          <div>
            <p>Method</p>
            <p>URL</p>
          </div>
          <form className="flex justify-between">
            <select name="method" id="request-method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
            <input type="text" name="url" id="request-url" />
            <button type="submit">SEND</button>
          </form>
        </div>

        <div>
          <ul>
            <li>body</li>
            <li>headers</li>
          </ul>
        </div>

        <div>
          <textarea name="request-result" id="request-result"></textarea>
        </div>
      </ScreenWrapper>
    </>
  );
};
