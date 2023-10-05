INSERT INTO [dbo].[resource]
(
        [resource_id],
        [model],
        [location]
    )
VALUES 
    (
        @resource_id,
        @model,
        @location
    )