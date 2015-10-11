#import <UIKit/UIKit.h>
#import <TwitterKit/TwitterKit.h>
#import "TwitterAPI.h"

@implementation TwitterAPI

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getTweets:(RCTResponseSenderBlock)callback)
{
  TWTRAPIClient *client = [[TWTRAPIClient alloc] init];
  NSDictionary *params = @{@"q" : @"reactive2015"};
  NSError *clientError;
  
  NSURLRequest *request = [[[Twitter sharedInstance] APIClient] URLRequestWithMethod:@"GET" URL:@"https://api.twitter.com/1.1/search/tweets.json" parameters:params error:&clientError];
  
  if (request) {
    [client sendTwitterRequest:request completion:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
      if (data) {
        // handle the response data e.g.
        NSError *jsonError;
        NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:&jsonError];
        NSArray *statuses = [json objectForKey:@"statuses"];
        callback(@[[NSNull null], statuses]);
      }
      else {
        NSLog(@"Error: %@", connectionError);
      }
    }];
  }
  else {
    NSLog(@"Error: %@", clientError);
  }
}

@end