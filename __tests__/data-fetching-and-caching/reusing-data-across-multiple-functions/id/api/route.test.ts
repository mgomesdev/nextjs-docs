/**
 * @jest-environment node
 */

import fixture_post from "__tests__/fixtures/posts";
import { GET } from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/api/route";

global.fetch = jest.fn();

jest.mock("next/server", () => {
   return {
      NextResponse: {
         json: jest.fn((data) => data),
      },
   };
});

describe("reusing-dat-aacross-multiple functions: route handler posts", () => {
   it("Deve retornar os posts", async () => {
      const mockParams = Promise.resolve({ id: "7" });
      const url = `https://api.vercel.app/blog/${(await mockParams).id}`;
      const mockRequest = new Request(url);
      const mockData = Object.assign({}, fixture_post[0]);

      (fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockResolvedValue(mockData),
      });

      const posts = await GET(mockRequest, { params: mockParams });

      expect(fetch).toHaveBeenCalledWith(url);
      expect(posts).toEqual({ data: mockData });
   });
});
